import {Sequelize} from "sequelize";
import database from '../config/database.js';

const {DataTypes} = Sequelize;

const Korisnik = database.define('korisnici', {
    korisnik_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ime: DataTypes.STRING,
    prezime: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    korisnicko_ime: {
        type: DataTypes.STRING,
        unique: true
    },
    sifra: DataTypes.STRING,
    poslednja_prijava: DataTypes.DATE,
    verifikovan: DataTypes.BOOLEAN,
    reset_sifra_token: DataTypes.STRING,
    reset_sifra_istice_u: DataTypes.DATE,
    verifikacioni_token: DataTypes.STRING,
    verfikacioni_token_istice_u: DataTypes.DATE,
    aktivno: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
},{
    timestamps: true,
    freezeTableName: true
});

export default Korisnik;