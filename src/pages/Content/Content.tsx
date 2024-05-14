import { FC, useEffect, useState } from 'react'
import { useContext } from '@/app/store/useContent'
import { stages } from '@/shared/stages'
import { Typewriter } from '@/shared/ui/Typewriter'
import { LocalStorageKey, localStorageService } from '@/shared/services/localStorageService'
import next from '@shared/assets/img/icon/caret-right.jpg'
import cls from './Content.module.scss'

export const Content: FC = () => {
  const { stage, setStage } = useContext()
  const [currentLyricIndex, setCurrentLyricIndex] = useState<number>(0)

  const handleStopTyping = () => {
    setCurrentLyricIndex(currentLyricIndex + 1)
  }

  const handleNextStage = () => {
    if (stage > stages.length - 2) return
    setStage(stage + 1)
    localStorageService.setItem(LocalStorageKey.STAGE, stage + 1)
  }

  const handlePrevStage = () => {
    if (stage === 0) return
    setStage(stage - 1)
    localStorageService.setItem(LocalStorageKey.STAGE, stage - 1)
  }

  useEffect(() => {
    setCurrentLyricIndex(0)
  }, [stage])

  return (
    <div className={cls.content} key={stage}>
      <div className={`${cls.imageContainer} ${stages[stage].imgAnimate ? cls.animate : ''}`}>
        <img src={stages[stage].image} alt="content" />
      </div>
      <div className={cls.textContainer}>
        <div className={cls.lyrics}>
          {stages[stage].lyrics?.map((lyric) => {
            return (
              <div key={lyric.id}>
                <Typewriter
                  author={lyric.author}
                  text={currentLyricIndex === lyric.id ? lyric.text : ''}
                  delay={10}
                  onTypingFinish={handleStopTyping}
                />
                <span className={cls.divider} />
              </div>
            )
          })}
        </div>

        <div className={cls.actions}>
          <img className={cls.actionButton} src={next} alt="next-button" onClick={handleNextStage} />
          <img
            style={{ transform: 'rotate(180deg)' }}
            className={cls.actionButton}
            src={next}
            alt="next-button"
            onClick={handlePrevStage}
          />
        </div>
      </div>
    </div>
  )
}
