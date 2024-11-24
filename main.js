import * as T from "three"
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';;
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { DRACOLoader } from 'three/examples/jsm/Addons.js';
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

function removeObjectAndDispose(object) {
  if (!object) return;

  // Traverse and dispose
  object.traverse(obj => {
    if (obj.isMesh) {
      // Dispose geometry
      if (obj.geometry) {
        obj.geometry.dispose();
      }
      // Dispose material
      if (obj.material) {
        // Handle materials array
        if (Array.isArray(obj.material)) {
          obj.material.forEach(mat => {
            if (mat.map) mat.map.dispose(); // Dispose texture
            if (mat.lightMap) mat.lightMap.dispose();
            if (mat.bumpMap) mat.bumpMap.dispose();
            if (mat.normalMap) mat.normalMap.dispose();
            if (mat.specularMap) mat.specularMap.dispose();
            if (mat.envMap) mat.envMap.dispose();
            if (mat.alphaMap) mat.alphaMap.dispose();
            mat.dispose(); // Dispose material
          });
        } else {
          if (obj.material.map) obj.material.map.dispose(); // Dispose texture
          if (obj.material.lightMap) obj.material.lightMap.dispose();
          if (obj.material.bumpMap) obj.material.bumpMap.dispose();
          if (obj.material.normalMap) obj.material.normalMap.dispose();
          if (obj.material.specularMap) obj.material.specularMap.dispose();
          if (obj.material.envMap) obj.material.envMap.dispose();
          if (obj.material.alphaMap) obj.material.alphaMap.dispose();
          obj.material.dispose(); // Dispose material
        }
      }
    }
  });
}

// swiper.on('progress', (swiper) => {
//   const totalProgress = Math.abs(swiper.progress) * 100;

//   text1.forEach(text => { text.style.top = -totalProgress * 2.1 + 'px'; })
//   text2.forEach(text => { text.style.top = -totalProgress * 2.5 + 'px'; })
//   text3.forEach(text => { text.style.top = -totalProgress * 2.4 + 'px'; })
//   text4.forEach(text => { text.style.top = -totalProgress * 2.3 + 'px'; })
//   text5.forEach(text => { text.style.top = -totalProgress * 2.5 + 'px'; })
//   text6.forEach(text => { text.style.top = -totalProgress * 2.2 + 'px'; })
//   text7.forEach(text => { text.style.top = -totalProgress * 2.2 + 'px'; })
//   text8.forEach(text => { text.style.top = -totalProgress * 2.2 + 'px'; })
// });

swiper.on('slideChange', (swiper) => {
  const activeIndex = swiper.activeIndex;
  console.log(activeIndex);
  for (let i = 1; i <= 8; i++) {
    document.querySelectorAll(`.text${i}`).forEach(item => {
      item.classList.add("hidden");
    })
  }
  document.querySelectorAll(`.text${activeIndex + 1}`).forEach(item => {
    item.classList.remove("hidden")
  })
  scene.traverse(obj => {
    removeObjectAndDispose(obj)
    if (obj.name == "Sketchfab_Scene") {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      loader2.load("scene.gltf", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene2"
        mesh.position.set(0, 30, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
      loader.load("snacktime_chocolate.glb", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(0.5, 0.5, 0.5)
        mesh.name = "Sketchfab_Scene"
        mesh.position.set(-15, 10, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      gsap.to(camera.position, {
        x: -18,
        y: 27,
        z: 55,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -18,
        y: 27,
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
        mesh.position.set(-15, 0, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
        mesh.position.set(0, 30, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
      loader4.load("amato_chocolate_naranja.glb", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(450, 450, 450)
        mesh.name = "Sketchfab_Scene4"
        mesh.position.set(-15, 0, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      gsap.to(camera.position, {
        x: -18,
        y: 32,
        z: 131,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -18,
        y: 32,
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
        mesh.position.set(-15, 0, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
      loader5.load("chocolates.glb", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(0.1, 0.1, 0.1)
        mesh.name = "Sketchfab_Scene5"
        mesh.position.set(-40, 0, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      gsap.to(camera.position, {
        x: -40,
        y: 100,
        z: 100,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -40,
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
    if (obj.name == "Sketchfab_Scene5" && activeIndex == 3) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      loader4.load("amato_chocolate_naranja.glb", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(450, 450, 450)
        mesh.name = "Sketchfab_Scene4"
        mesh.position.set(-15, 0, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      gsap.to(camera.position, {
        x: -18,
        y: 32,
        z: 131,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -18,
        y: 32,
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
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene6"
        mesh.position.set(0, 30, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
    if (obj.name == "Sketchfab_Scene6" && activeIndex == 4) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene6"))
      loader5.load("chocolates.glb", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(0.1, 0.1, 0.1)
        mesh.name = "Sketchfab_Scene5"
        mesh.position.set(-40, 0, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
      gsap.to(camera.position, {
        x: -40,
        y: 100,
        z: 100,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: -40,
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
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene7"
        mesh.position.set(0, 30, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene6"
        mesh.position.set(0, 30, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
    if (obj.name == "Sketchfab_Scene7" && activeIndex == 7) {
      scene.remove(obj)
      scene.remove(scene.getObjectByName("Sketchfab_Scene"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene2"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene3"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene4"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene5"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene6"))
      scene.remove(scene.getObjectByName("Sketchfab_Scene7"))
      let box, center;
      loader8.load("chocolate_truffle.glb", function (gltf) {
        var mesh = gltf.scene;
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene8"
        mesh.position.set(0, 30, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        box = new T.Box3().setFromObject(mesh);
        center = box.getCenter(new T.Vector3());
        console.log(center);
        // mesh.position.sub(center); 
        animate()
        scene.add(mesh)
      })

      gsap.to(camera.position, {
        x: 106,
        y: 120,
        z: 47,
        duration: 2,
        ease: "expo.inOut",
        onStart: () => controls.enabled = false,
        onComplete: () => controls.enabled = true,
      },)
      gsap.to(controls.target, {
        x: 0,
        y: 29,
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
        mesh.scale.set(40, 40, 40)
        mesh.name = "Sketchfab_Scene7"
        mesh.position.set(0, 30, 0);
        mixer = new T.AnimationMixer(mesh);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        clock = new T.Clock()
        animate()
        scene.add(mesh)
      })
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
  })

  for (let i = 0; i < document.getElementById("swiper-wrapper").children.length; i++) {
    if (document.getElementById("swiper-wrapper").children.item(i).children.item(0) != null) {
      document.getElementById("swiper-wrapper").children.item(i).children.item(0).remove()
    }
  }
  document.getElementById("swiper-wrapper").children.item(activeIndex).appendChild(renderer.domElement)
})
var modelIndex = 5;
window.openDetails = index => {
  modelIndex = index
  document.getElementById("swiper-wrapper").style.display = "none";
  const wrapper = document.getElementById("wrapper")
  const modelWrapper = document.getElementById("modelWrapper")
  wrapper.classList.remove("-bottom-[200%]")
  wrapper.classList.remove("top-full")
  wrapper.classList.add("bottom-0")
  wrapper.classList.add("top-[calc(100%-95px)]")
  document.getElementById("swiper-wrapper").children.item(index - 1).children.item(0).remove()
  const name = document.getElementById("name")
  const desc = document.getElementById("desc")
  // const ar = document.getElementById("AR")
  modelWrapper.appendChild(renderer.domElement)
  controls.enableRotate = true
  controls.enablePan = true
  controls.enableZoom = true
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.5
  setTimeout(() => {
    controls.autoRotate = false
  }, 5000)
  // renderer.setSize(window.innerWidth, window.innerHeight - 52 - 150)
  // ar.href = ar.href.slice(0, -1) + index
  if (index == 1) {
    name.innerHTML = "Chocolate"
    desc.innerHTML = "description"
  }
  if (index == 2) {
    name.innerHTML = "Black Chocolate"
    desc.innerHTML = "description"
  }
  if (index == 3) {
    name.innerHTML = "Nestle"
    desc.innerHTML = "description"
  }
  if (index == 4) {
    name.innerHTML = "Dark Chocolate"
    desc.innerHTML = "description"
  }
  if (index == 5) {
    name.innerHTML = "Juice"
    desc.innerHTML = "description"
  }
  if (index == 6) {
    name.innerHTML = "Mobile"
    desc.innerHTML = "description"
  }
  if (index == 7) {
    name.innerHTML = "Suzuki"
    desc.innerHTML = "description"
  }
  if (index == 8) {
    name.innerHTML = "Cat Food"
    desc.innerHTML = "description"
  }
}
window.closeDetails = () => {
  document.getElementById("swiper-wrapper").style.display = "";
  const wrapper = document.getElementById("wrapper")
  const modelWrapper = document.getElementById("modelWrapper")
  wrapper.classList.add("-bottom-[200%]")
  wrapper.classList.add("top-full")
  wrapper.classList.remove("bottom-0")
  wrapper.classList.remove("top-[calc(100%-95px)]")
  modelWrapper.children.item(0).remove()
  document.getElementById(`model${modelIndex}`).appendChild(renderer.domElement)
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.updateProjectionMatrix()
  controls.enableRotate = false
  controls.enablePan = false
  controls.enableZoom = false
  controls.autoRotate = false
  if (modelIndex == 1) {
    gsap.to(camera.position, {
      x: -18,
      y: 27,
      z: 55,
      duration: 2,
      ease: "expo.inOut",
      onStart: () => controls.enabled = false,
      onComplete: () => controls.enabled = true,
    },)
    gsap.to(controls.target, {
      x: -18,
      y: 27,
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
  if (modelIndex == 2) {
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
  if (modelIndex == 3) {
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
  if (modelIndex == 4) {
    gsap.to(camera.position, {
      x: -18,
      y: 32,
      z: 131,
      duration: 2,
      ease: "expo.inOut",
      onStart: () => controls.enabled = false,
      onComplete: () => controls.enabled = true,
    },)
    gsap.to(controls.target, {
      x: -18,
      y: 32,
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
  if (modelIndex == 5) {
    gsap.to(camera.position, {
      x: -40,
      y: 100,
      z: 100,
      duration: 2,
      ease: "expo.inOut",
      onStart: () => controls.enabled = false,
      onComplete: () => controls.enabled = true,
    },)
    gsap.to(controls.target, {
      x: -40,
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
  if (modelIndex == 6) {
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
  // if (modelIndex == 7) {
  //   gsap.to(camera.position, {
  //     x: -108,
  //     y: 36,
  //     z: 52,
  //     duration: 2,
  //     ease: "expo.inOut",
  //     onStart: () => controls.enabled = false,
  //     onComplete: () => controls.enabled = true,
  //   },)
  //   gsap.to(controls.target, {
  //     x: -69,
  //     y: 24,
  //     z: 24,
  //     duration: 2,
  //     ease: "expo.inOut",
  //     onStart: () => controls.enabled = false,
  //     onComplete: () => controls.enabled = true,
  //     onUpdate: function () {
  //       controls.update()
  //     }
  //   })
  // }
  // if (modelIndex == 8) {
  //   gsap.to(camera.position, {
  //     x: -8,
  //     y: 24,
  //     z: 92,
  //     duration: 2,
  //     ease: "expo.inOut",
  //     onStart: () => controls.enabled = false,
  //     onComplete: () => controls.enabled = true,
  //   },)
  //   gsap.to(controls.target, {
  //     x: -8,
  //     y: 24,
  //     z: 0,
  //     duration: 2,
  //     ease: "expo.inOut",
  //     onStart: () => controls.enabled = false,
  //     onComplete: () => controls.enabled = true,
  //     onUpdate: function () {
  //       controls.update()
  //     }
  //   })
  // }
}

const scene = new T.Scene();
const camera = new T.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const loader = new GLTFLoader(loadingManager)
const loader2 = new GLTFLoader(loadingManager)
const loader3 = new GLTFLoader(loadingManager)
const loader4 = new GLTFLoader(loadingManager)
const loader5 = new GLTFLoader(loadingManager)
const loader6 = new GLTFLoader(loadingManager)
const loader7 = new GLTFLoader(loadingManager)
const loader8 = new GLTFLoader(loadingManager)
loader8.setPath("./");
loader7.setPath("./blackChocolate/");
loader6.setPath("./blackChocolate/");
loader5.setPath("./");
loader4.setPath("./");
loader3.setPath("./nestle/");
loader2.setPath("./blackChocolate/");
loader.setPath("./chocolate/");
const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
const draco = new DRACOLoader()
draco.setDecoderPath('/examples/jsm/libs/draco/');
loader.setDRACOLoader(draco)

Promise.all([
  loader.loadAsync('snacktime_chocolate.glb'),
  loader2.loadAsync('scene.gltf'),
  loader3.loadAsync('scene.gltf'),
  loader4.loadAsync('scene.gltf'),
  loader5.loadAsync('scene.gltf'),
  loader6.loadAsync('scene.gltf'),
  loader7.loadAsync('scene.gltf'),
  loader8.loadAsync('scene.gltf')
])
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

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
document.addEventListener("DOMContentLoaded", () => {
  gsap.to(camera.position, {
    x: -18,
    y: 27,
    z: 55,
    duration: 2,
    ease: "expo.inOut",
    onStart: () => controls.enabled = false,
    onComplete: () => controls.enabled = true,
  },)
  gsap.to(controls.target, {
    x: -18,
    y: 27,
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
})

let mixer, clock;


loader.load("snacktime_chocolate.glb", function (gltf) {
  var mesh = gltf.scene;
  mesh.scale.set(0.5, 0.5, 0.5)
  // reflector.position.y = 1
  mesh.position.set(-15, 10, 0);
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
controls.enableZoom = false;
controls.minDistance = 0;
controls.maxDistance = 280;
controls.rotateSpeed = 0.5;
controls.update()
const dl = new T.DirectionalLight(0xffffff, 4.5)
camera.add(dl)
scene.add(camera)
scene.add(new T.AmbientLight(0xffffff, 4))

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

function animate() {
  requestAnimationFrame(animate);
  mixer.update(clock.getDelta());
  // console.log(camera.position);

  controls.update();

  scene.traverse(darkenNonBloomed);
  bloomComposer.render();
  scene.traverse(restoreMaterial);
  finalComposer.render();
}