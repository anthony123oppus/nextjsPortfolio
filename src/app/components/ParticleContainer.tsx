'use client'
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadPolygonPath } from "tsparticles-path-polygon"
import React, { useCallback } from 'react';
import { Container, Engine, tsParticles } from 'tsparticles-engine';

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonPath(tsParticles);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles 
      className='w-full h-screen absolute translate-z-0 mix-blend-multiply'
      id='tsparticles' init={particlesInit} loaded={particlesLoaded} 
      options={{
        fullScreen: {
          enable: false,
          zIndex: -10
        },
        background: {
          color: 'transparent'
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 6
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
            color: {
              value: "#008060",
              animation: {
                enable: true,
                speed: 10
              }
            },
            move: {
              attract: {
                enable: false,
                distance: 10,
                rotate: {
                  x: 2000,
                  y: 2000
                }
              },
              direction: "none",
              enable: true,
              outModes: {
                default: "destroy"
              },
              path: {
                clamp: true,
                enable: true,
                delay: {
                  value: 0
                },
                generator: "polygonPathGenerator",
                options: {
                  sides: 6,
                  turnSteps: 30,
                  angle: 30
                }
              },
              random: false,
              speed: 5,
              straight: false,
              trail: {
                fillColor: "#fff",
                length: 30,
                enable: true
              }
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 0
            },
            opacity: {
              value: 1
            },
            shape: {
              type: "star"
            },
            size: {
              value: 2
            }
          },
          emitters: {
            direction: "none",
            rate: {
              quantity: 1,
              delay: 0.60
            },
            size: {
              width: 0,
              height: 0
            },
            position: {
              x: 50,
              y: 50
            }
          }
      }} 
    />
  );
};

export default ParticlesContainer;
