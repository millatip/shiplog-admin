<template>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <edit-profile-form :model="model">
        </edit-profile-form>
      </div>
      <div class="col-lg-6 col-md-12">
        <card class="card" :header-classes="{'text-right': isRTL}">
          <h4 slot="header" class="card-title">{{$t('dashboard.simpleTable')}}</h4>
          <div class="table-responsive">
            <cargo-table></cargo-table>
          </div>
        </card>
      </div>
    </div>
  </template>
  <script>
    import EditProfileForm from './Profile/CargoCRUD';
    import UserCard from './Profile/UserCard'
    import CargoTable from './Dashboard/CargoTable';
    
    export default {
      components: {
        EditProfileForm,
        UserCard,
        CargoTable
      },
      data() {
        return {
          model: {
            company: 'Creative Code Inc.',
            email: 'mike@email.com',
            username: 'michael23',
            firstName: 'Mike',
            lastName: 'Andrew',
            address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
            city: 'Melbourne',
            country: 'Australia',
            about: 'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.'
          },
          user: {
            fullName: 'Mike Andrew',
            title: 'Ceo/Co-Founder',
            description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
          }
        }
      }
    }
  </script>
  <style>
  </style>
  