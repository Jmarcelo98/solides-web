import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
// para usar a validação customizada basta adicionar a função nas validações do form
// email: new FormControl('', [ Validators.required, emailValidator()])
// o retorno ' return { email: true }; ' deverá ter mesmo nome da msg no FormControlExceptionDirective
// assim ele irá retornar o texto que estiver configurado lá no FormControlExceptionDirective


export class CustomValidations {


    static checkPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        const password = group.get('senha')?.value;
        const passwordConfirm = group.get('confirmarSenha')?.value;

        if (password === passwordConfirm) {
            return null;
        } else {
            group.get('confirmarSenha')?.setErrors({ nonIdenticalPassword: true });
            return { nonIdenticalPassword: true };
        }
    };


    static updateFormControl(formControl: any, keys?: Array<string>) {
        const controls = Object.keys(formControl);
        for (const control of controls) {
            const formCtrl = formControl[control];
            if (formCtrl instanceof FormGroup) {
                this.updateFormControl(formCtrl.controls, keys);
                continue;
            }
            if (keys) {
                const hasKey = keys.some(
                    x => x === control);
                if (hasKey) {
                    formCtrl.updateValueAndValidity();
                }
            } else {
                formCtrl.updateValueAndValidity();
            }
        }
    }
}


