import imageMap from "../assets/images/imageMap"
import { Skill, Skills as SkillData } from "../model"

const Skills = ({ skills }: { skills: SkillData[] } ) => {
  return (
    <>
      <p id="expertise" className="font-manrope text-star-green font-extrabold text-xl tracking-widest mt-14">SKILLS</p>
      <div className='relative flex flex-col items-start justify-center gap-6 mt-6'>
        {skills.map((skillCategory: SkillData, index: number) => (
          <div key={`skillCategory${index}`} className="border border-white border-opacity-10 rounded-[32px] px-8 pb-8 bg-[#2e4746] relative">
            <div className="absolute opacity-25 left-0 right-0 h-full">
              <div className="bg-noise bg-[size:128px] bg-repeat opacity-40 absolute w-full h-full rounded-[32px]" />
            </div>
            <p className='font-pockota-medium text-white-custom text-2xl mt-6 text-left'>{skillCategory.title}</p>
            <div className='flex flex-col gap-4 mt-8 justify-center items-start'>
              {skillCategory.content.map((skill: Skill, skillIndex: number) => (
                <div key={`skill${skillIndex}`} className='flex items-center justify-start gap-2 mt-4'>
                  <img className="w-6" src={imageMap[skill.icon ?? "reactIcon"]} alt={skill.text} />
                  <p className='font-manrope text-white-custom text-[16px] font-semibold leading-6 w-96 text-left'>
                    {skill.text} {skill.experience === 1 ? `(${skill.experience} year)` : `(${skill.experience} years)`}
                  </p>
                  <div className="w-72 bg-gray-200 rounded-full mb-4 dark:bg-gray-900">
                    <div className="bg-star-green rounded-full text-[#444] text-xs" style={{ width: `${skill.level * 10}%` }}>{skill.level} / 10</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
