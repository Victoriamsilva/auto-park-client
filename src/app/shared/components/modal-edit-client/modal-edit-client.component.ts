import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-modal-edit-client',
  templateUrl: './modal-edit-client.component.html',
  styleUrls: ['./modal-edit-client.component.scss'],
})
export class ModalEditClientComponent {
  @Input() data: any = {};
  form: any;

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get cpf() {
    return this.form.get('cpf');
  }

  constructor(
    private clientsService: ClientsService,
    private modalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.form.patchValue(this.data);
  }
  async editClient() {
    try {
      const res: any = await this.clientsService.editClient({
        ...this.form.value,
        id: this.data.id,
      });
      this.toastr.success('Cliente atualizado', 'Sucesso!');
      this.closeModal();
    } catch (error) {
      this.toastr.error('Erro ao atualizar cliente', 'Erro!');
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
