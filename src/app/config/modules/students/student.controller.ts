import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  const { student: studentData } = req.body

  // will call service func to send the data
  const result = await StudentServices.createStudentIntoDB(studentData)

  res.status(200).json({
    success: true,
    message: 'Student create successfully!',
    data: result,
  })
}

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB()

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully!',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params
  const result = await StudentServices.getSingleStudentFromDB(studentId)

  res.status(200).json({
    success: true,
    message: 'Student info got successfully',
    data: result,
  })
}

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
}
