/* eslint-disable @typescript-eslint/no-unused-vars */
import http from 'http';
class Koa {
    middlewares: any[];
    constructor() {
        this.middlewares = []
    }

    use(middleware) {
        this.middlewares.push(middleware);

    }

    async handleRequest(ctx) {
        const dispatch = async (i) => {
            if (i === this.middlewares.length) {
                return
            }
            const middleware = this.middlewares[i];
            await middleware(ctx, () => dispatch(i + 1));
        }

        await dispatch(0);
        ctx.res.end(ctx.body);

    }

    listen(port) {
        const server = http.createServer(async(req, res) => {
            const ctx = { req, res, body: '' };
            await this.handleRequest(ctx);
        })

        server.listen(port, () => {
            console.log(`Koa server is running  on port ${port}`)
        })
    }

}