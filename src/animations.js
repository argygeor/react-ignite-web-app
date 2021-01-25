export const fadeIn = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         duration: 0.75
      }
   },
   exit: {
      opacity: 0,
      transition: {
         duration: 0.75
      }
   }
}

export const popIn = {
   hidden: {
      opacity: 0,
      scale: 0.5
   },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.75
      }
   },
   exit: {
      opacity: 0,
      transition: {
         duration: 0.75
      }
   }
}