import Image from 'next/image';
import Link from 'next/link';
import Clients_preview from '../Clients_preview/Clients_preview';
import Icon from '../Icon/Icon';
import Skills_summary from '../Skills_summary/Skills_summary';
import hero_style from "./Hero.module.css"

const Hero = ({ ...props }) => {
    const background_mobile = props.backgroundPhoto[0]
    const background_desktop = props.backgroundPhoto[1]

  return (
    <section className={hero_style.hero} >
      <div className={hero_style.background_desktop_container}>
        <img className={hero_style.background_desktop} src={background_desktop.url} height={background_desktop.height} width={background_desktop.width} />
      </div>

      <div className={hero_style.content} >
        <div className={`${hero_style.content_container} boxed`}>
          <div className={hero_style.introduction}>
              <div className={hero_style.title_container}>
                <h1>{props.title}</h1>
              </div>
              
              <div className={hero_style.tagline_container}>
                <h3>{props.tagline}</h3>
              </div>

              <Skills_summary skills_summary={props.skillsSummary}/>

              <div className={hero_style.description_container} >
                <p>{props.description}</p>
              </div>

              <div className={hero_style.background_mobile_container}>
                <Image src={background_mobile.url} height={background_mobile.height} width={background_mobile.width} />
              </div>
          </div>

          <div className={hero_style.hero_bottom}>
              <div className={hero_style.scrol_down_container}>
                  <Link href="#projecten">
                    <a>
                      <Icon icon="scroll_down" />
                    </a>
                  </Link>
              </div>
              
              <Clients_preview clients_preview={props.clients_preview} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero