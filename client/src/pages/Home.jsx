/*
import framer-motion libraries (motion and AnimatePresence)
import useSnapshot from valtio
import headcontainerAnimation, headcontentAnimation, TextAnimation from '../config/config/motion'
*/

import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className= 'home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            
            <img src='./public/threejs.png' alt='logo' width="50px" height="50px" className="w-1 h-1 object-contain"/>
          </motion.header>
        </mot