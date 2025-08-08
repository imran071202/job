import { Job } from "../models/jobModel.js"

export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, exprience, position, companyId } = req.body
        const userId = req.id
        if (!title || !description || !requirements || !salary || !location || !jobType || !exprience || !position || !companyId) {
            return res.status(400).json({
                message: 'Something missing',
                success: false
            })
        }
        const jobpost = await Job.create({
            title, description,
            requirements,
            salary,
            location,
            jobType,
            exprience,
            position,
            company: companyId,
            create_by:userId

        })
        return res.status(201).json({
            message: 'Successfully create new job',
            success: true
        })


    } catch (error) {
        console.log(error);


    }

}

export const allJob = async (req, res) => {
    try {
        const keyword = req.query.keyword || ""

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        }
        const findJob = await Job.find(query).populate({
            path: "company"
        }).sort({createAt:-1})

        if (!findJob) {
            return res.status(404).json({
                message: 'Job not found',
                success: false
            })
        }
        return res.status(200).json({
            findJob,
            success: true
        })


    } catch (error) {
        console.log(error);
        

    }
}

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id
        const findJobById = await Job.findById(jobId)

        if (!findJobById) {
            return res.status(404).json({
                message: 'Job not found',
                success: false
            })
        }
        return res.status(200).json({
            findJobById,
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}
export const getAdminJob = async (req, res) => {
    try {
        const adminId = req.id
        const jobs = await Job.find({ create_by: adminId })

        if (!jobs) {
            return res.status(404).json({
                message: 'Job not found',
                success: false
            })

        }
        return res.status(200).json({
            jobs,
            success: true
        })

    } catch (error) {
        console.log(error);


    }
}