import { FullpageDirective } from './fullpage.directive';

const elementRefMock = {
  nativeElement: {}
}

describe('FullpageDirective', () => {
  it('should create an instance', () => {
    const directive = new FullpageDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
