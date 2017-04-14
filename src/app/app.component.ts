import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: Object = {
    'home': {label: 'Home', sublabel: 'Sublabel', content: 'This is page content.'},
    'about': {label: 'About', sublabel: 'Sublabel', content: 'This is page content.'},
    'contact': {label: 'Contact', sublabel: 'Sublabel', content: 'This is page content.'}
  };

  currentPage = 'home';
  page = this.pages['home'];
  isInTransit = false;

  setCurrentPage(page) {
    if (this.currentPage !== page) {
      this.page = this.pages[page];
      this.currentPage = page;
      this.isInTransit = true;
    }
  };

  isCurrentPage(page) {
    return this.currentPage === page;
  };

  // $scope.$on('bgTransitionComplete', function () {
  //   $scope.isInTransit = false;
  // });
}
