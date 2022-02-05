/**
 * @fileoverview Classe para manipulação do token
 *
 * @author Bruno Mesquita
 */

 import { verify, sign } from 'jsonwebtoken';

 class TokenManager {
   public check(token: string): { id: number } {
     try {
       const { JWT_PASS } = process.env;

       return verify(token.toString(), JWT_PASS) as any;
     } catch {
       throw new Error('Token invalido');
     }
   }

   public create(id: number): string {
     try {
       const { JWT_EXPIRES, JWT_PASS } = process.env;

       return sign({ id }, JWT_PASS, { expiresIn: JWT_EXPIRES });
     } catch (err) {
       throw new Error('Erro ao criar token de acesso');
     }
   }
 }

 export default TokenManager;
