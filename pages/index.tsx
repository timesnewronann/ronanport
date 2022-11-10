import {GetStaticProps} from 'next'
import Head from 'next/head'
import Header from "../components/header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Projects from "../components/Projects"
import ContactMe from '../components/ContactMe'
import Link from "next/link"
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, socials } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSocials} from '../utils/fetchSocials'
import { fetchExperience} from '../utils/fetchExperience'
import { fetchSkills} from '../utils/fetchSkills'
import { fetchProjects} from '../utils/fetchProjects'



type Props = {
  pageInfo: PageInfo;
  experience: Experience;
  skills: Skill[];
  projects: Project[];
  socials: socials[];

}


const Home = ({pageInfo, experience, socials, skills, projects}: Props) => {
  return (
    <div className = 'bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#47BA4F]/60'>
      <Head>
        <title>{pageInfo.name} -  Portfolio</title>
       
      </Head>
      <h1> </h1>
      
      

      {/* header */}
      <section id = "Header" className = 'snap-start'>
      <Header socials = {socials} />
      </section>

      {/* hero */}
      <section id= "hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>

      </section>
      

      {/*About */}
      <section id ="about" className="snap-center">
        <About pageInfo = {pageInfo}/>
      </section>
      
      {/*Experiences*/}
      <section id = "Experience" className ="snap-center">
        <WorkExperience/>
      </section>

      {/*Skills*/}
      <section id = "Skills" className='snap-center'>
        <Skills skills = {skills}/>
      </section>

      {/*Projects*/}
      <section id = "Projects" className = "snap-center">
        <Projects projects={projects}/>

      </section>
   
      

      
      
      {/*Cool Stuff*/}

      {/*Contact me */}
      <section id= "ContactMe" className = "snap-center">
        <ContactMe/>
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="warriors.jpg"/>
            </div>
        </footer>
      </Link>

      
      
    </div>
  )
}

export default Home

export const getStaticProps = async() => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: socials[] = await fetchSocials();
  
  return{
    props:{
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },
    revalidate: 10, 
  }
}