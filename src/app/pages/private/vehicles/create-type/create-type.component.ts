import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss'],
})
export class CreateTypeComponent {
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

  async createType() {
    try {
      await this.typesService.createType(this.form.value);
      this.toastr.success('Tipo de veiculo criado', 'Sucesso!');
      this.closeModal();
      this.onEdit.emit();
    } catch (error) {
      this.toastr.error('Erro ao criar veículo', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
