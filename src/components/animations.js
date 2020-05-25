import { velocityHelpers } from 'velocity-react'

const Animations = {
  In: velocityHelpers.registerEffect({
    calls: [
      [
        {
          transformPerspective: [800, 800],
          transformOriginX: ['50%', '50%'],
          transformOriginY: ['100%', '100%'],
          marginBottom: 0,
          opacity: 1,
          rotateX: [0, 130],
        },
        1,
        {
          easing: 'ease-out',
          display: 'block',
        },
      ],
    ],
  }),

  Out: velocityHelpers.registerEffect({
    calls: [
      [
        {
          transformPerspective: [800, 800],
          transformOriginX: ['50%', '50%'],
          transformOriginY: ['0%', '0%'],
          marginBottom: -30,
          opacity: 0,
          rotateX: -70,
        },
        1,
        {
          easing: 'ease-out',
          display: 'block',
        },
      ],
    ],
  })
}

export default Animations
