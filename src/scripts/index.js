import { users, posts, suggestUsers  } from "./database.js"

import { render } from "./cardPost.js"
import { renderSuggest } from "./suggest.js"
import { renderUsers } from "./renderUsers.js"
import { renderModal, handleModal, closeModal } from "./modalposts.js"




renderUsers(users)
renderSuggest(suggestUsers)
render(posts)
handleModal()

