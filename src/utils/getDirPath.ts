import { fileURLToPath } from "url";
import { dirname } from "path";

// Obtenir le chemin du fichier actuel
const __filename = fileURLToPath(import.meta.url);

// Obtenir le répertoire courant
const __dirname = dirname(__filename);

export default __dirname;
