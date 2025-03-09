import { BodySheets } from '../template/theme';
import WorkExperience from '../components/WorkExperience';

export default function Work() {
  return (
    <BodySheets sx={{m:0, padding:'2rem 2rem', }}>
        <WorkExperience />
    </BodySheets>
  );
}