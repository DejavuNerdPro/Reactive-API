import dotenv from 'dotenv';
import {Pool} from 'pg';
import {Observable} from 'rxjs';
dotenv.config();            //load local environmental variables on .env file.

const pool=new Pool({
user:process.env.DB_USER,
host:process.env.DB_HOST,
password:process.env.DB_PASSWORD,
port:Number(process.env.DB_PORT),
database:process.env.DB_NAME
});

//for custom query statement
export const query$=(text:string,params:any[]):Observable<any>=>
    new Observable(
        (subscriber)=>{
            pool.query(
                text,params,(err,res)=>{
                    if(err){
                        subscriber.error(err);
                    }else{
                        subscriber.next(res.rows);
                        console.log('ROWS : ',res.rows);
                        subscriber.complete();
                    }
                }
            );
        }
    );

    pool.on('connect',()=>{
        console.log(
            "Postgre SQL Server Connected."
        )
    })
