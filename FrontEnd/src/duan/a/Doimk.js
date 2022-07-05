import React from "react";
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
function Doimk() {
  return (
    <div>
      <body>
        <main class="container">
          <section class="row">
            <div class="offset-3 col-6 mt-5">
              <form >
                <div class="card">
                  <div class="card-header" style={{margin: "auto", color: "red"}}>
                    <b>Đổi mật khẩu</b>
                  </div>
                  <div class="card-body">

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="usernaem"
                            label="Họ tên"
                            name="username"
                            autoComplete="username"
                            autoFocus
                          />

                        </div>
                        <div class="form-group">
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passmoi"
                            label="Mật khẩu mới"
                            type="password"
                            id="passmoi"

                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passcu"
                            label="Mật khẩu cũ"
                            type="password"
                            id="passcu"

                          />
                        </div>
                        <div class="form-group">
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="nhaplai"
                            label="Nhập lại mật khẩu mới"
                            type="password"
                            id="nhaplai"

                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    <button class="btn btn-danger" style={{marginRight:"20px"}}>Đồng ý</button>
                    <button class="btn btn-success">Hủy</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </div>
  );
}

export default Doimk;
