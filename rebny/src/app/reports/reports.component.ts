import { Component, OnInit } from '@angular/core';

declare var tableau: any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  tableauViz: any
  constructor() { }

  ngOnInit() {
    var placeholderDiv = document.getElementById('tableauViz');
    var url = 'https://public.tableau.com/views/RealEstateDashboard_0/InquirySummary?:embed=y&:loadOrderID=0&:display_count=yes&:showTabs=y';
    var options = {
      hideTabs: true,
      width: '1800px',
      height: '1000px',
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    this.tableauViz = new tableau.Viz(placeholderDiv, url, options);    
  
  }

}
