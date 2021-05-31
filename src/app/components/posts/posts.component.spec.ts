import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PostsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PostsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'blog'`, () => {
    const fixture = TestBed.createComponent(PostsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('blog');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PostsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('blog app is running!');
  });
});
