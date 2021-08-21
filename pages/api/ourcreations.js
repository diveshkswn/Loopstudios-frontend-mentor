import { creationData } from '../../data/creationData';

export default function ourcreation(req, res) {
  res.status(200).json(creationData);
}
