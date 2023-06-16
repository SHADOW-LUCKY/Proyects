<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link navbar-info">
    <img src="views/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">pschology 1.0</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="views/assets/img/angie.jpeg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Angie Suarez</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
               <li class="nav-item">
            <a href="/ArTeM01-044/Proyects/psicology/psicology/Home" class="nav-link <?php if($rutas[5]=="Home"):?> active <?php endif ?>">
              <i class="bi bi-house"></i>
              <p>
                Home
              </p>
            </a>
          </li>
        <li class="nav-item">
            <a href="/ArTeM01-044/Proyects/psicology/psicology/Users" class="nav-link <?php if($rutas[5]=="Users"):?> active <?php endif ?>">
              <i class="bi bi-person-circle"></i>
              <p>
                Users
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/ArTeM01-044/Proyects/psicology/psicology/ClinicHistory" class="nav-link <?php if($rutas[5]=="ClinicHistory"):?> active <?php endif ?>">
              <i class="bi bi-file-medical"></i>
              <p>
                Clinic History
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/ArTeM01-044/Proyects/psicology/psicology/Interviews" class="nav-link <?php if($rutas[5]=="Interviews"):?> active <?php endif ?>">
              <i class="bi bi-newspaper"></i>
              <p>
                Interviews
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/ArTeM01-044/Proyects/psicology/psicology/Psychologists" class="nav-link <?php if($rutas[5]=="Psychologists"):?> active <?php endif ?>">
              <i class="bi bi-people"></i>
              <p>
                Psychologists
              </p>
            </a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
            <i class="bi bi-envelope"></i>
              <p>
                Mailbox
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="../mailbox/mailbox.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../mailbox/compose.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../mailbox/read-mail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>
      
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>