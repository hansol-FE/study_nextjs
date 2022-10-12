import { userDatail } from 'constansts/userDetail'

export default function handler(req, res) {
  res.status(200).json(userDatail)
}
