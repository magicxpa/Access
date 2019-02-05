import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
import {FormControl} from '@angular/forms';
@Component({
    selector: 'mga-Input',
    providers: [...magicProviders],
    styleUrls: ['./Input.component.css'],
    templateUrl: './Input.component.html'
}) export class Input extends TaskBaseMagicComponent {

   tagCombobox:any;
  // bindMagic(name: string) {
  //     const selector = '[magic=\"' + name + '\"]';
  //     const element: any = document.querySelector(selector);
  //     const fc = <FormControl>this.screenFormGroup.get(name);
  //     fc.valueChanges.subscribe(
  //       (value: any) => {
  //         element.value = value;
  //       });
  //     element.addEventListener('valueChange', function (e) {
  //       fc.setValue(e.detail.value);
  //     });
  //
  //
  // }

  ngOnInit(): void {
    console.log('creating form controls');
    super.ngOnInit();
    //this.bindMagic('A');
    // this.bindMagic('B');
    this.tagCombobox = document.querySelector('tag-combobox');
    var btn: any = document.querySelector('tag-button');
    btn.componentOnReady().then(() => {
      btn.addEventListener('click', function() {
       // alert('click');
      });
    });
    this.tagCombobox.data = this.mg.getItemListValues('Combobox7');
    // this.tagCombobox.data =      [
    //   { id: 1, name: 'Banana' },
    //   { id: 2, name: 'Apple' },
    //   { id: 3, name: 'Orange' },
    //   { id: 4, name: 'Kiwi' },
    //   { id: 5, name: 'Strawberry' },
    //   { id: 6, name: 'Blackberry' },
    //   { id: 7, name: 'Blueberry' },
    //   { id: 8, name: 'Cherry' },
    //   { id: 9, name: 'Grape' },
    //   { id: 10, name: 'Grapefruit' },
    // ];

  }

  onClick(e){
    this.tagCombobox.data = this.mg.getItemListValues('Combobox7');

  }

  selchange(e:any)
  {
    alert('change');
  }



}
