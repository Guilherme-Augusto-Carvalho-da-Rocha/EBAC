import React from 'react'
import Titulo from '../../Components/Title'
import Paragrafo from '../../Components/Paragrath'
import { GitHubSection } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre Mim</Titulo>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste
        exercitationem non temporibus eum dignissimos neque alias incidunt
        nostrum adipisci voluptates, praesentium a? Earum molestiae quasi
        incidunt accusantium hic a!
      </Paragrafo>
      <GitHubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=guilherme-augusto-carvalho-da-rocha&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=guilherme-augusto-carvalho-da-rocha&layout=compact&langs_count=7&theme=dracula" />
      </GitHubSection>
    </section>
  )
}

export default Sobre
