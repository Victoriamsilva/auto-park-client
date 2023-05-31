import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss'],
})
export class EditTypeComponent {
  @Input() type: any;
  @Output() onEdit = new EventEmitter();
  form: any;

  get name() {
    return this.form.get('name');
  }

  get price() {
    return this.form.get('price');
  }

  constructor(
    private typesService: TypesService,
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.form.patchValue(this.type);
  }

  async editType() {
    try {
      await this.typesService.editType(this.type.id, this.form.value);
      this.toastr.success('Tipo de veiculo atualizado', 'Sucesso!');
      this.closeModal();
      this.onEdit.emit();
    } catch (error) {
      this.toastr.error('Erro ao atualizar tipo de veículo', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
