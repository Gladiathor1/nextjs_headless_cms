import Butter from 'buttercms';

let butter;

const previewSetting = process.env.PREVIEW
// make preview mode by default
const preview = previewSetting === "true" || previewSetting === undefined ? 1 : 0

try {
  butter = Butter('e328153035c75943621b93a78a2c158d55ac819f', preview);
}
catch (e) {
  console.log(e)
}

export async function getLandingPage(slug) {
    const params = {
        levels: 3
      }
    try {
      const page = await butter.page.retrieve('*', slug, params);
  
      return page?.data?.data;
    } catch (e) {
    //   throw e.response.data.detail
    }
  }

  