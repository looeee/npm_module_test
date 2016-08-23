// import {
//   textureLoader,
// }
// from './loaders/textureLoader';
// *****************************************************************************
// MESH OBJECT SUPERCLASS
// Superclass for any THREE.js mesh object. Returns a THREE mesh
// *****************************************************************************
//TODO: rename this class
export class MeshObject {
  constructor(spec) {
    this.spec = spec || {};

    this.init();
    if (this.spec.layer) {
      this.mesh.layers.set(this.spec.layer);
    }

    return this.mesh;
  }

  createMesh(geometry, material) {
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

  // loadTexture(url) {
  //   return textureLoader(url);
  // }
}