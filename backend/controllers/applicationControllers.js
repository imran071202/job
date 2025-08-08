import { Application } from "../models/applicationModel.js"
import { Job } from "../models/jobModel.js"


export const applyJob = async (req, res) => {
    try {
        const userId = req.id
        const jobId = req.params.id

        if (!jobId) {
            return res.status(400).json({
                message: "Job id required",
                success: false
            })
        }

        // check user exist or not
        const checkUserApplication = await Application.findOne({ job: jobId, applicant: userId })

        if (checkUserApplication) {
            return res.status(400).json({
                message: "Already applied ",
                success: false
            })

        }

        // check job exist or not

        const checkjob = await Job.findById(jobId)
        if (!checkjob) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        //Create new application

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })
        checkjob.application.push(newApplication._id)
        await checkjob.save()
        return res.status(201).json({
            message: " Job applied successfully.",
            success: true
        })


    } catch (error) {
        console.log(error);


    }
}

export const getAppliedJobs = async (req, res) => {

    try {
        const userId = req.id
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: ({
                path: 'company',
                options: { sort: { createdAt: -1 } }
            })
        })
        if (!application) {
            return res.status(404).json({
                message: 'No applications are avaliable',
                success: false
            })
        }
        return res.status(200).json({
            application,
            success: true
        })

    } catch (error) {
        console.log(error);


    }

}
export const getApplicants = async (req, res) => {

    try {
        const jobId = req.params.id
        const job = await Job.findById(jobId).populate({
            path: 'application',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "applicant"
            }
        })
        if (!job) {
            return res.status(404).json({
                message: 'Job not found',
                success: false
            })
        }
        return res.status(200).json({
            job,
            success: true
        })

    } catch (error) {

    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body
        const applicationId = req.params.id
        if (!status) {
            return res.status(404).json({
                message: 'Job not found',
                success: false
            })
        }
        // find application by appliction id
        const application = await Application.findOne({ _id: applicationId })
        if (!application) {
            return res.status(404).json({
                message: 'Application not found',
                success: false
            })
        }
        //update status
        application.status = status.toLowerCase();
        await application.save()

        return res.status(200).json({
            message: 'Successfully update',
            success: true
        })


    } catch (error) {
        console.log(error);


    }

}
