import { BodySheets } from '../template/theme';
import WorkExperience from '../components/WorkExperience';

export default function Work() {
  return (
    <BodySheets sx={{width: '786px', '@media (max-width: 780px)' : {width:'100%'}}}>
      <WorkExperience />
    </BodySheets>
  );
}