const images = [];

class ImageRepository {
  static save(image) {
    images.push(image);
    return image;
  }

  static findAll() {
    return images;
  }

  static findById(id) {
    return images.find(image => image.id === id);
  }

  static deleteById(id) {
    const index = images.findIndex(image => image.id === id);
    if (index !== -1) {
      return images.splice(index, 1);
    }
    return null;
  }
}

module.exports = ImageRepository;
