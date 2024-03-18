import { AppModule } from '../src/app.module';

describe('AppModule', () => {
  it('should return "Hello World"', () => {
    expect(AppModule.helloWorld()).toBe('Hello World');
  });
});
