# Password Component - Take Home Assessment

<div align="center">
   
   [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://dcb-password-component.vercel.app/)
</div>

The challenge involves the creation of a password component as a part of the component library project, intended for integration into various React frontend applications. This versatile component should provide the flexibility to accommodate diverse password requirements.

## Requirements

- The React component should accept a list of password requirements as a prop, e.g `options={passwordReqs}`
    - The list of requirements can be flexible (has 1 or more)
    - The following password requirements must be implemented and available in the library - Has one or more of these special characters: !@#$%^&\*
      - Has a number / digit
      - Has an uppercase letter
      - Has NO consecutive letters

- The component should be styled as below, but should be able to be extended.  
- There should be a way for us to validate your implementation - this could be automated testing, a reference build, whatever you’re comfortable with.

<div align="center">
  
![preview](https://github.com/danielacb/password-component/assets/18037904/7797b139-c690-46db-8d79-3a76192a3534)
</div>




## The solution

[Turborepo](https://turbo.build/repo) was used to simulate the concept of a component library being integrated into another Next.js project. Within this repository, the component library is located in the `packages/ui` directory. 

Four distinct components were crafted to facilitate customization:

- `PasswordValidator`: This component serves as the central hub for all validation logic. It is responsible for returning validations, errors, error messages, and tips messages.
- `PasswordInput`: An individual component designed to handle password input.
- `PasswordChecker`: This component is responsible for displaying the password requirements and offering visual cues to indicate whether they are being met.
- `PasswordForm`: it combines all the other components while staying true to the provided design.

This component segregation was implemented to offer users the flexibility to adapt and customize the components according to their specific requirements. Simultaneously, it retains the option to use them as initially designed, aligning with the provided design guidelines.

You can see the example pages here:

- Provided design:
  - Live preview: https://dcb-password-component.vercel.app/
  - Code: https://github.com/danielacb/password-component/blob/main/apps/web/app/page.tsx
- Custom design:
  - Live: preview https://dcb-password-component.vercel.app/custom
  - Code: https://github.com/danielacb/password-component/blob/main/apps/web/app/custom/page.tsx

<br>
<div align="center">
  <img width="643" alt="preview-original-design" src="https://github.com/danielacb/password-component/assets/18037904/03740101-feb0-47d6-8223-a2e3f2952a3d">
  <img width="643" alt="preview-custom-design" src="https://github.com/danielacb/password-component/assets/18037904/b2ccfdf0-ed62-4958-9861-11f2d2a825a7">
</div>

 
## Running the project locally

Recommended versions: node `v16.14.2` and npm `v8.5.0`

```
# Install dependencies
npm install

# Start development mode
npm run dev
```

Visit `http://localhost:3000` to open the Next.js application.

## TODO - Things to be improved

- [ ] Add tests
- [ ] Replace `styled-components` on the ui library. (It was used because the standard turbo repo setup for the ui package does not support css modules by default. Using styled components was easier than setting up a whole new project)
- [ ] Add documentation for the `package/ui` project (storybook).
- [ ] Test with other types of project other than Next.js

