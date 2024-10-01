import * as T from "three"
import gsap from "gsap";
import { OrbitControls, FontLoader } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';;
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { DRACOLoader } from 'three/examples/jsm/Addons.js';
import RajdHani from "./RajdHani.json"
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const text1 = document.querySelectorAll('.text1');
const text2 = document.querySelectorAll('.text2');
const text3 = document.querySelectorAll('.text3');
const text4 = document.querySelectorAll('.text4');
const text5 = document.querySelectorAll('.text5');
const text6 = document.querySelectorAll('.text6');
const text7 = document.querySelectorAll('.text7');
const text8 = document.querySelectorAll('.text8');
const loadingManager = new T.LoadingManager()

loadingManager.onProgress = (url, loaded, total) => {
  document.querySelector("progress").value = (loaded / total) * 100;
}

loadingManager.onLoad = () => {
  document.getElementById("loadingScreen").style.display = "none";
}

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  }
});

swiper.on('progress', (swiper) => {
  const totalProgress = Math.abs(swiper.progress) * 100;

  text1.forEach(text => { text.style.top = -totalProgress * 2.1 + 'px'; })
  text2.forEach(text => { text.style.top = -totalProgress * 2.5 + 'px'; })
  text3.forEach(text => { text.style.top = -totalProgress * 2.4 + 'px'; })
  text4.forEach(text => { text.style.top = -totalProgress * 2.3 + 'px'; })
  text5.forEach(text => { text.style.top = -totalProgress * 2.5 + 'px'; })
  text6.forEach(text => { text.style.top = -totalProgress * 2.2 + 'px'; })
  text7.forEach(text => { text.style.top = -totalProgress * 2.2 + 'px'; })
  text8.forEach(text => { text.style.top = -totalProgress * 2.2 + 'px'; })
});

swiper.on('slideChange', (swiper) => {
  const activeIndex = swiper.activeIndex;
  const totalProgress = Math.abs(swiper.progress) * 100;
  console.log(activeIndex);
  text1.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.1 + 'px',
      duration: 0.6
    })
  })
  text2.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.5 + 'px',
      duration: 0.6
    })
  })
  text3.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.4 + 'px',
      duration: 0.6
    })
  })
  text4.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.3 + 'px',
      duration: 0.6
    })
  })
  text5.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.25 + 'px',
      duration: 0.6
    })
  })
  text6.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.2 + 'px',
      duration: 0.6
    })
  })
  text7.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.2 + 'px',
      duration: 0.6
    })
  })
  text8.forEach(text => {
    gsap.to(text.style, {
      top: -totalProgress * 2.2 + 'px',
      duration: 0.6
    })
  })
  scene.traverse(obj => {
    if (obj.name == "Sketchfab_Scene") {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      loader2.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene2"
        // reflector.position.y = 1
        mesh.position.set(0, 30, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      camera.position.set(350, -150, -90)
      gsap.to(camera.position, {
        x: 234,
        y: -143,
        z: -24.5,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 106,
        y: -133,
        z: 47,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene2" && activeIndex == 0) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      loader.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(450, 450, 450)
        mesh.name = "Sketchfab_Scene"
        // reflector.position.y = 1
        mesh.position.set(-15, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      camera.position.set(350, -150, -90)
      gsap.to(camera.position, {
        x: 10,
        y: 80,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 0,
        y: 13,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene2" && activeIndex == 2) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      loader3.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(250, 250, 250)
        mesh.name = "Sketchfab_Scene3"
        // reflector.position.y = 1
        mesh.position.set(-15, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: 165,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene3" && activeIndex == 1) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      loader2.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene2"
        // reflector.position.y = 1
        mesh.position.set(0, 30, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      camera.position.set(350, -150, -90)
      gsap.to(camera.position, {
        x: 234,
        y: -143,
        z: -24.5,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 106,
        y: -133,
        z: 47,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene3" && activeIndex == 3) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      loader4.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(450, 450, 450)
        mesh.name = "Sketchfab_Scene4"
        // reflector.position.y = 1
        mesh.position.set(-15, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: 135,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene4" && activeIndex == 2) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      loader3.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(250, 250, 250)
        mesh.name = "Sketchfab_Scene3"
        // reflector.position.y = 1
        mesh.position.set(-15, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: 165,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene4" && activeIndex == 4) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      loader5.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(50, 50, 50)
        mesh.name = "Sketchfab_Scene5"
        // reflector.position.y = 1
        mesh.position.set(-40, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: -40,
        y: -13,
        z: 100,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -40,
        y: -13,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene5" && activeIndex == 3) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      loader4.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(450, 450, 450)
        mesh.name = "Sketchfab_Scene4"
        // reflector.position.y = 1
        mesh.position.set(-15, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: 135,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene5" && activeIndex == 5) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      loader6.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(350, 350, 350)
        mesh.name = "Sketchfab_Scene6"
        // reflector.position.y = 1
        mesh.position.set(-7, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: -8,
        y: 24,
        z: 92,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -8,
        y: 24,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene6" && activeIndex == 4) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene6"))
      loader5.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(50, 50, 50)
        mesh.name = "Sketchfab_Scene5"
        // reflector.position.y = 1
        mesh.position.set(-40, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: -40,
        y: -13,
        z: 100,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -40,
        y: -13,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene6" && activeIndex == 6) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene6"))
      loader7.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(30, 30, 30)
        mesh.name = "Sketchfab_Scene7"
        // reflector.position.y = 1
        mesh.position.set(-35, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: -108,
        y: 36,
        z: 52,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -69,
        y: 24,
        z: 24,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene7" && activeIndex == 5) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene6"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene7"))
      loader6.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(350, 350, 350)
        mesh.name = "Sketchfab_Scene6"
        // reflector.position.y = 1
        mesh.position.set(-7, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: -8,
        y: 24,
        z: 92,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -8,
        y: 24,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene7" && activeIndex == 7) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene6"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene7"))
      loader8.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(20, 20, 20)
        mesh.name = "Sketchfab_Scene8"
        // reflector.position.y = 1
        mesh.position.set(-8, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: -8,
        y: 24,
        z: 92,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -8,
        y: 24,
        z: 0,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
    if (obj.name == "Sketchfab_Scene8" && activeIndex == 6) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene6"))
      loader7.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(30, 30, 30)
        mesh.name = "Sketchfab_Scene7"
        // reflector.position.y = 1
        mesh.position.set(-35, 0, 0);
        // mesh.traverse(obj => {
        //   if (obj.name == "polySurface3PIV") {
        //     new TextureLoader().load("./images/1w.png", function (texture) {
        //       texture.flipY = false;
        //       obj.material = new T.MeshStandardMaterial({ map: texture });
        //     })
        //   }
        //   if (obj.name == "MASH1_ReproMesh1Shape") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        //   if (obj.name == "polySurface281PIV") {
        //     obj.layers.toggle(BLOOM_SCENE)
        //   }
        // })
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      // gsap.globalTimeline.clear()
      gsap.to(camera.position, {
        x: -108,
        y: 36,
        z: 52,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -69,
        y: 24,
        z: 24,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
        onUpdate: function () {
          controls.update()
        }
      })
    }
  })

  for (let i = 0; i < document.getElementById("swiper-wrapper").children.length; i++) {
    if (document.getElementById("swiper-wrapper").children.item(i).children.item(0) != null) {
      document.getElementById("swiper-wrapper").children.item(i).children.item(0).remove()
    }
  }
  document.getElementById("swiper-wrapper").children.item(activeIndex).appendChild(renderer.domElement)
})

window.handleDetails = index => {
  document.getElementById("swiper-wrapper").style.display = "none";
  if (index == 1) {

  }
}

const scene = new T.Scene();
const camera = new T.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
const loader = new GLTFLoader(loadingManager)
const loader2 = new GLTFLoader(loadingManager)
const loader3 = new GLTFLoader(loadingManager)
const loader4 = new GLTFLoader(loadingManager)
const loader5 = new GLTFLoader(loadingManager)
const loader6 = new GLTFLoader(loadingManager)
const loader7 = new GLTFLoader(loadingManager)
const loader8 = new GLTFLoader(loadingManager)
loader8.setPath("./catFood/");
loader7.setPath("./suzuki/");
loader6.setPath("./mobile/");
loader5.setPath("./juice/");
loader4.setPath("./darkChocolate/");
loader3.setPath("./nestle/");
loader2.setPath("./blackChocolate/");
loader.setPath("./chocolate/");
const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
const draco = new DRACOLoader()
draco.setDecoderPath('/examples/jsm/libs/draco/');
loader.setDRACOLoader(draco)
let imgStateNum = 1;

Promise.all([
  loader.loadAsync('scene.gltf'),
  loader2.loadAsync('scene.gltf'),
  loader3.loadAsync('scene.gltf'),
  loader4.loadAsync('scene.gltf'),
  loader5.loadAsync('scene.gltf'),
  loader6.loadAsync('scene.gltf'),
  loader7.loadAsync('scene.gltf'),
  loader8.loadAsync('scene.gltf'),
]).then((results) => {
  // here the models are returned in deterministic order
  console.log(results);
}).catch((err) => {
  console.log(err);
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
// renderer.toneMapping = T.CineonToneMapping
// renderer.toneMappingExposure = 1.5
// renderer.outputColorSpace = T.SRGBColorSpace
// renderer.domElement.classList.add("absolute")

const darkMaterial = new T.MeshBasicMaterial({ color: 'black' });
const materials = {};

camera.position.set(-120, 45, 70)

let elem = document.createElement('div');
elem.className = "flex absolute h-[100dvh] items-center justify-center md:left-[20%] md:right-[20%] left-0 right-0"
elem.id = "wrapper"
elem.innerHTML = `
    <div
      class="flex md:flex-row flex-col relative bg-[#1d1f39] z-[26] h-fit rounded-[20px] flex-wrap transition-all duration-300"
      id="popframe">
      <button
        class="text-[40px] text-white hover:text-violet-600" onclick="start()">
        Start</button>
    </div>
    `
// document.getElementById("model1").appendChild(elem)

document.addEventListener("DOMContentLoaded", () => {
  // const textGeometry = new TextGeometry(event.target[0].value, {
  //   font: font2,
  //   size: 3,
  //   depth: 0.6,
  // });
  // textGeometry.computeBoundingBox();
  // const textMat2 = new T.MeshStandardMaterial({ color: 0xffff00 })
  // const textMesh2 = new T.Mesh(textGeometry, textMat2)
  // textMesh2.position.set(11, 14, 10)
  // textMesh2.rotation.y = 1.55
  // const textMesh3 = new T.Mesh(textGeometry, textMat2)
  // textMesh3.position.set(4, 68, 10)
  // textMesh3.rotation.y = 1.55

  // scene.add(textMesh2)
  // scene.add(textMesh3)
  gsap.to(camera.position, {
    x: 10,
    y: 80,
    z: 0,
    duration: 2,
    ease: "expo.inOut",
    onStart: () => controls.enabled = false,
    onComplete: () => controls.enabled = true,
  },)
  gsap.to(controls.target, {
    x: 0,
    y: 13,
    z: 0,
    duration: 2,
    ease: "expo.inOut",
    onStart: () => controls.enabled = false,
    onComplete: () => controls.enabled = true,
    onUpdate: function () {
      controls.update()
    }
  })
  document.getElementById("model1").appendChild(renderer.domElement);
  // window.setInterval(() => {
  //   scene.traverseVisible(obj => {
  //     if (obj.name == "rain") {
  //       gsap.to(obj.position, {
  //         y: 0,
  //         duration: 2,
  //         ease: "none",
  //       })
  //     }
  //   })
  //   scene.traverseVisible(obj => {
  //     if (obj.name == "rain") {
  //       const [y] = Array(1).fill().map(() => T.MathUtils.randFloatSpread(45))
  //       obj.position.y = 40 + y
  //     }
  //   })
  // }, 2005);
})

let mixer, clock;
window.addEventListener('resize', () => {
  camera.aspect = (window.innerWidth) / (window.innerHeight);
  camera.updateProjectionMatrix();
  renderer.setSize((window.innerWidth), (window.innerHeight));
});

loader.load("scene.gltf", function (gltf) {
  var mesh = gltf.scene;
  mesh.scale.set(450, 450, 450)
  // reflector.position.y = 1
  mesh.position.set(-15, 0, 0);
  // mesh.traverse(obj => {
  //   if (obj.name == "polySurface3PIV") {
  //     new TextureLoader().load("./images/1w.png", function (texture) {
  //       texture.flipY = false;
  //       obj.material = new T.MeshStandardMaterial({ map: texture });
  //     })
  //   }
  //   if (obj.name == "MASH1_ReproMesh1Shape") {
  //     obj.layers.toggle(BLOOM_SCENE)
  //   }
  //   if (obj.name == "polySurface281PIV") {
  //     obj.layers.toggle(BLOOM_SCENE)
  //   }
  // })
  mixer = new T.AnimationMixer(mesh);
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });
  clock = new T.Clock()
  animate()
  scene.add(mesh)
})

const geo = new T.BoxGeometry(0.4, 0.2, 0.4)
const mat = new T.MeshStandardMaterial({ color: 0x000000, transparent: true, opacity: 0 })
const box = new T.Mesh(geo, mat)
box.position.set(16.4, 14.95, 16.4)
box.name = "next"
scene.add(box)
const box2 = new T.Mesh(geo, mat)
box2.position.set(12, 14.95, 18.73)
box2.name = "prev"
scene.add(box2)

const BLOOM_SCENE = 1;
const bloomLayer = new T.Layers();
bloomLayer.set(BLOOM_SCENE);

const renderScene = new RenderPass(scene, camera);
const outputPass = new OutputPass();

const bloomPass = new UnrealBloomPass(new T.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = 1
bloomPass.strength = 0.25
bloomPass.radius = 0.2

const bloomComposer = new EffectComposer(renderer);
bloomComposer.renderToScreen = false;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

const mixPass = new ShaderPass(
  new T.ShaderMaterial({
    uniforms: {
      baseTexture: { value: null },
      bloomTexture: { value: bloomComposer.renderTarget2.texture }
    },
    vertexShader: document.getElementById('vertexshader').textContent,
    fragmentShader: document.getElementById('fragmentshader').textContent,
  }), 'baseTexture'
);
mixPass.needsSwap = true;

const finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);
finalComposer.addPass(mixPass);
finalComposer.addPass(outputPass);

const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false;
controls.enableRotate = false;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.35;
controls.minDistance = 0;
controls.maxDistance = 280;
controls.rotateSpeed = 0.5;
controls.update()
// const spl = new T.SpotLight(0xe1ceb2, 8000000, 530, Math.PI / 2 + 1.2, 0.4)
// spl.position.set(0, 450, 0)
// spl.target.position.set(0, 2, 0)
// scene.add(spl)
// const splH = new T.SpotLightHelper(spl)
// scene.add(splH)
const dl = new T.DirectionalLight(0xffffff, 4.5)
camera.add(dl)
scene.add(camera)
scene.add(new T.AmbientLight(0xffffff, 4))

const raycaster = new T.Raycaster()

window.addEventListener('pointerdown', onMouseDown)

function onMouseDown(event) {
  camera.updateProjectionMatrix()
  controls.update()
  const coords = new T.Vector2(
    (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
    -((event.clientY / renderer.domElement.clientHeight) * 2 - 1),
  )
  raycaster.setFromCamera(coords, camera)

  let intersections = raycaster.intersectObjects(scene.children, true);
  if (intersections.length > 0) {
    // intersections[0].object.layers.toggle(BLOOM_SCENE)
    console.log(intersections[0].object)
  }
}

window.closeChat = () => {
  document.getElementById("chat").classList.toggle("z-[45]")
  document.getElementById("chat").classList.toggle("absolute")
  document.getElementById("chat").classList.toggle("w-full")
  document.getElementById("chat").classList.toggle("h-full")
  document.getElementById("chat").classList.toggle("p-3")
  document.getElementById("chat").classList.toggle("hidden")
  document.getElementById("btn-close").classList.toggle("hidden")
}

function darkenNonBloomed(obj) {
  if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
    materials[obj.uuid] = obj.material;
    obj.material = darkMaterial;
  }
}

function restoreMaterial(obj) {
  if (materials[obj.uuid]) {
    obj.material = materials[obj.uuid];
    delete materials[obj.uuid];
  }
}

// document.getElementById("loadingScreen").classList.add("z-[20]");
// document.getElementById("loadingScreen").innerHTML = `<img src="images/loading.gif" class="w-auto h-[200px]">`
// function loading() {
//   document.getElementById("loadingScreen").classList.add("hidden")
// }

// function addStars() {
//   const geometry = new T.SphereGeometry(0.3, 0.3, 0.3);
//   const mat = new T.MeshStandardMaterial({ color: 0xffffff })
//   const starsMesh = new T.Mesh(geometry, mat)
//   starsMesh.name = "star1";

//   const [x, z] = Array(2).fill().map(() => T.MathUtils.randFloatSpread(450))
//   const [y] = Array(1).fill().map(() => T.MathUtils.randFloatSpread(200))

//   starsMesh.position.set(x, 200 + y, z);
//   scene.add(starsMesh);
// }

// Array(1000).fill().forEach(addStars)

// scene.traverseVisible(obj => {
//   if (obj.name == "star1") {
//     const [y] = Array(1).fill().map(() => T.MathUtils.randFloatSpread(200))
//     obj.position.y = 200 + y
//     setTimeout(() => {
//       // gsap.to(obj.position, {
//       //   y: 3,
//       //   duration: 2,
//       //   yoyo: true
//       // })
//     }, 100)
//   }
// })

function animate() {
  requestAnimationFrame(animate);
  mixer.update(clock.getDelta());
  // Define the rotation speed

  // Calculate the rotation angles for each axis
  // console.log(camera.position);


  // Apply the rotation to the cube
  // points.rotation.x = angle; // Rotate around X axis
  // points.rotation.z = angle;
  // console.log(camera.position);

  controls.update();

  scene.traverse(darkenNonBloomed);
  bloomComposer.render();
  scene.traverse(restoreMaterial);
  finalComposer.render();
  // renderer.render(scene, camera)
  // camera.updateProjectionMatrix()
}