import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';
import { AuthGuard } from './guards/auth.guard';
// import cookieSession from 'cookie-session'
const cookieSession = require("cookie-session") // cjs

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ["shhhhhh"]
  }))
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  // app.useGlobalInterceptors()
  // app.useGlobalGuards(new AuthGuard());
  (app as any).set('etag', false);
  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });
  await app.listen(3000);
}
bootstrap();
