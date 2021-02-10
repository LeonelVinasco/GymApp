const { User, Gym, City } = require('./src/database/models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const destroyCity = async () => {
    const destroyed = await City.destroy({
        where: {
            id: 7
        }
    })
    console.log("Destroyed:", destroyed);
}
const destroyUser = async () => {
    const destroyed = await User.destroy({
        where: {
            id: 1
        }
    })
    console.log("Destroyed:", destroyed);
}

const destroyGym = async () => {
    const destroyed = await Gym.destroy({
        where: {
            id: 1
        }
    })
    console.log("Destroyed:", destroyed);
}

const run = async () => {
    await destroyCity();
    await destroyGym();
    await process.exit()
}

run()