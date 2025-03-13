import { BodySheets } from '../template/theme';
import ProjectsMenu from '../components/ProjectsMenu';
import SnakeGame from '../components/SnakeGame/SnakeGame';
import { useState } from 'react';

export default function Projects() {
  const [projectView, setProjectView] = useState("anaconda")

  let game=()=>{
    if (projectView=='anaconda'){
      return <SnakeGame />
    }
  }
  return (
    <BodySheets sx={{m:0, padding:'2rem 2rem', }}>
      {/* <ProjectsMenu setProjectView={setProjectView} /> */}
      {game()}
    </BodySheets>
  );
}