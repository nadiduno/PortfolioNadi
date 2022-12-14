import { MicrosoftPowerpointLogo } from 'phosphor-react'

interface LessonProps{
  title:string;
  slug: string;
  availableAt:Date;
  type:'live' | 'class';
}

export function Lesson(props: LessonProps){
  // PARA SABER SIM A DATA DA PARA LIBERAR
  // const isLessonAvailable=false;
  return (
   <a href="#"> 
    <span className="text-gray-300">
      {/* {props.availableAt.toString()} */}
    </span>
    
    <div className="rounded border border-gray-500 p-4 mt-2">
      <header className="flex items-center justify-between">
        <samp className="text-sm text-green-300 font-medium flex items-center gap-2">
          <MicrosoftPowerpointLogo size={20}/>
          Dashbord
        </samp>
        <samp className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          {/* {props.type=='live'? 'AO VIVO' : 'AULA PRÁTICA'} */}
        </samp>
      </header>
      <strong className="text-gray-200 mt-5 block">
        {/* {props.title} */}
      </strong>
    </div>
   </a>
  )
}