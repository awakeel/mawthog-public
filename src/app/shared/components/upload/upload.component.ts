import { TransferService } from "./../../../routes/addcar/transfer.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor(private http: HttpClient, private transfer: TransferService) {}

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      let formData: FormData = new FormData();
      formData.append("car", file, file.name);
      /** In Angular 5, including the header Content-Type can invalidate your request */
      const headers = new HttpHeaders();
      headers.append("Content-Type", "multipart/form-data");
      headers.append("Accept", "application/json");
      this.http
        .post(
          `${environment.HOST}${environment.API}${environment.UPLOAD_URL}`,
          formData,
          {
            headers: headers,
          }
        )
        .subscribe((data: any) => {
          this.transfer.pictures.push(data.filename);
          console.log(this.transfer.pictures);
        });
    }

    //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  ngOnInit() {}
}
