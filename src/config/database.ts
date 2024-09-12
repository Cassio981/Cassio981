import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://cassio_user:wcGxnLKNJwp7O6yPYV70ybPf5Is0kzId@dpg-crcf863tq21c73f778sg-a.oregon-postgres.render.com/cassio';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;