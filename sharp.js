const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'dist/img/hero');
const destination = path.resolve(__dirname, 'dist/img/hero');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach((image) => {
        // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
        sharp(`${target}/${image}`)
            .resize(480)
            .toFile(path.resolve(
                __dirname,
                `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
            ));
    });
