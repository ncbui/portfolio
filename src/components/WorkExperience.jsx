import { Link } from 'react-router-dom';
import {Table, TableContainer, TableBody, TableCell, TableRow, List, ListItem, Box} from '@mui/material';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';
import { useTheme } from '@mui/styles';
import { Typography } from '@mui/joy';
import { BootstrapButton, tableRow } from '../template/theme';

const experience = {
    "work": [{
        "position": "Consultant Software Developer",
        "company": "Thoughtworks, Inc.",
        "website": "https://www.thoughtworks.com",
        "city": "remote, US ",
        "dates": "2024-2021",
        "summary": [
            "Build and maintain data pipelines and platforms, across frontend, backend, and cloud infrastructure. Worked closely with cross-functional teams to enable scientists, healthcare providers, operations specialists, and more to build tools to understand their data."
        ],
        "acheivements": [
            "Worked with cross-functional team to design, deploy, and maintain an pipeline that makes it easier for patient-generated data to advocate for quality patient care.",
            "Integrated monitoring, resource deployment, standardized exception handling, and security and compliance checks, into ci/cd pipelines to reduce Time to Error Resolution for and Time to Deployment into staging for new features.",
            "Presented relatable software & engineering concepts at lunch'n'learn series to teams of various expertises."
            ],
        "tools": ["Kubernetes", "ArgoCD", "PySpark", "React", "Python", "PostgreSQL", "Azure"]
    },
    {
        "position": "AWS Cloud Practitioner",
        "company": "AWS",
        "website": "https://www.thoughtworks.com",
        "city": " ",
        "dates": "2021",
        "summary": [],
        "acheivements": [],
        "tools": []
    },
        {
        "position": "Data Processing ",
        "company": "Invitae, Inc.",
        "website": "https://www.invitae.com",
        "city": "SF, US ",
        "dates": "2020-2017",
        "summary": ["Processed patient health records and streamline data quality checks."],
        "acheivements": [],
        "tools": ["EMR", "Salesforce", "RedShift",]
    },
    {
        "position": "Graduate Research Assistant",
        "company": "Action and Consciousness Lab, SFSU",
        "website": "https://faculty.sfsu.edu/~morsella/content/action-and-consciousness-laboratory",
        "city": "SF, US ",
        "dates": "2019-2016",
        "summary": ["Proposed, conducted, and analyzed behavioral experiments on automatic visual and syntactic processing."],
        "acheivements": [],
        "tools": ["EMR", "Salesforce", "RedShift",]
    },
    {
        "position": "Health Policy Intern",
        "company": "Health Promotion & Wellness unit, SFSU",
        "website": "https://wellness.sfsu.edu/",
        "city": "SF, US ",
        "dates": "2017-2016",
        "summary": ["Conducted focus groups for the newly-built Mashouf Wellness Center (MWC) that found that students on this commuter campus overwhelmingly needed places to rest. In 2024, MWC launched the Zen Den, a free space to nap at SFSU. "],
        "acheivements": ["Conducted focus groups for the newly-built Mashouf Wellness Center (MWC) that found that students on this commuter campus overwhelmingly needed places to rest. Presented findings with supporting researching to the MWC student board. In 2024, MWC launched the Zen Den, a free space to nap at SFSU. "],
        "tools": ["semi-structured interviews and focus groups","literature review"]
    }
],
"certs": ["AWS Cloud Practitioner"],
"education": [
    {
    "institution": "San Francisco State University",
    "city": "San Francisco, CA",
    "program": "Social, Personality, and Affective Psychology",
    "degree": "Graduate coursework towards MA",
    "dates": "2018-2016",
    "website":"https://psychology.sfsu.edu/social-personality-and-affective-science-psychology-graduate-program"
    },
    {"institution": "San Francisco State University",
    "city": "San Francisco, CA",
    "program": "Kinesiology, concentration in Neuromuscular Science",
    "degree": "BSc",
    "dates": "2016-2013",
    "website":"http://kin.sfsu.edu/undergraduate-programs#tab-content-tab-455-1"
}
], 
}


export default function WorkExperience () { 
    const theme = useTheme()
    
    

    const makeWorkRow = (exp) =>{
        return( exp.map((a,i)=>{
            return (
            <TableRow key={a+i} sx={tableRow} >
              <TableCell scope="row" sx={{ verticalAlign: 'top', p:0, m:0,  borderRight:'3px dotted', borderColor:theme.palette.primary.bright, borderBottom: 0,}}>
                      <Typography sx={{fontSize:"85%"}}> {a.dates} </Typography>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top', py:"0.2rem", m:0, borderBottom: 0, maxWidth: '80%', '@media (max-width: 786px)': {maxWidth: '50vw'} }}>
                      <Typography sx={{fontSize:"95%"}}>
                          <Link to={a.website} target="_blank" rel="noopener noreferrer"><b>{a.position}</b>  {a.company}</Link> 
                          <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.primary.bright, fontSize:'80%'}}/>
                      </Typography>
                      <List sx={
                          {fontSize: '90%',
                            width: '90%',
                      }}>
                          {listA(a.summary)}
                          {makeButtons(a)}
                      </List>
                  </TableCell>    
            </TableRow>
        )
    }))
    }

    

    const listA = (acheivements) => {
        return (
            <>
            {acheivements.map((a,i)=>{return <ListItem key={i}>{a}</ListItem>})}
            </>
        )
    }

    const makeButtons = ({tools}) =>{
        return( 
            <>
            {tools.map((tool)=>{
              return (
              <BootstrapButton 
                variant="outlined" 
                key={tool+tool.indexOf()}
                sx={{width:'fit-content', m: '.2rem'}}
                >
                {tool}
              </BootstrapButton>)})}
            </> 
        )}


    const makeEduRow = (exp) =>{
      return( exp.map((a,i)=>{
          return (
          <TableRow key={a+i} sx={tableRow} >
              <TableCell scope="row" sx={{ horizontalAlign: 'right', verticalAlign: 'top', p:0, m:0,  borderRight:'3px dotted', borderColor:theme.palette.primary.bright, borderBottom: 0,}}>
                <Typography sx={{fontSize:"85%"}}> {a.dates} </Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: 'top', py:"0.2rem", m:0, borderBottom: 0, maxWidth: '80%' }}>
                <Typography sx={{fontSize:"95%"}}>
                  <Link to={a.website} target="_blank" rel="noopener noreferrer"><b>{a.degree} </b> {a.program} {a.institution}</Link> 
                  <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.primary.bright, fontSize:'80%'}}/>
                </Typography>
              </TableCell>    
          </TableRow>
      )}))}
  
    const expTable = () => {
      return (
        <TableContainer>
        <Table aria-label="experience table" > 
          <TableBody>
            {makeWorkRow(experience.work)}
            {makeEduRow(experience.education)}
          </TableBody>
        </Table>
      </TableContainer>
    )
    }
    
    return (
        <Box sx={{ p:0}}>
          {expTable()}
        </Box>
    )
}