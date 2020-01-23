import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section>
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12">
              <div className="blogPostMedia">
                <img className="blogPostThumbnail" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/blog/blog-post-thumb-3.jpg" alt="image" />
                <div className="mediaBody">
                  <h1 className="title">Heading Lorem Ipsum Dolor Sit Amet</h1>
                  <div className="content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sagittis velit, eu dapibus urna. In auctor est rhoncus neque eleifend, ac ultrices lorem pretium. Vestibulum nibh nisi, dapibus id sagittis sit amet, molestie vel odio. Nullam eu massa auctor, iaculis magna a, iaculis enim. Nam neque odio, blandit rutrum pulvinar nec, scelerisque id augue. Vestibulum eu risus massa. Nam massa eros, maximus in congue sed, faucibus a dui. Nullam cursus purus sed tellus commodo blandit.
                        </p>
                        <p>
                        Sed feugiat maximus lacinia. Suspendisse in purus diam. Morbi congue odio nec nulla aliquam, sit amet feugiat est feugiat. Nam finibus semper finibus. Curabitur mi lorem, tincidunt id malesuada ac, hendrerit non felis. Integer enim purus, pulvinar non lobortis at, placerat eu massa. Integer condimentum mi eros, vitae commodo est auctor quis. Sed in scelerisque lacus. Integer faucibus, ante in sagittis feugiat, odio ante sollicitudin libero, pellentesque dapibus velit libero quis dolor. Vestibulum tristique justo ac leo imperdiet, non blandit risus accumsan. Nullam porttitor accumsan turpis, vel aliquam lacus vehicula eget. Sed libero felis, consequat sit amet quam consectetur, placerat sodales ipsum. Etiam tristique aliquam enim eu mollis.
                        </p>
                        <p>
                        Aliquam eget erat ultrices, aliquet magna ac, blandit nisi. Aenean eu risus eget mi egestas bibendum. Maecenas ultrices condimentum facilisis. Fusce laoreet commodo nibh, a luctus neque gravida et. Ut dictum volutpat semper. Aenean sapien odio, commodo sed fermentum eu, imperdiet ut quam. Aliquam felis nisl, pulvinar ut turpis a, suscipit suscipit ex. Donec sit amet ullamcorper nisl. Quisque eleifend lectus nulla, imperdiet semper metus dapibus sed. Aenean porta neque nec congue iaculis. Maecenas in urna elit. Fusce orci magna, tempor eu volutpat et, porttitor vitae sapien. Aenean sagittis ut sem mattis sodales. Integer in sem gravida, accumsan nisl id, tempus metus. Ut maximus leo neque, euismod viverra mauris semper sit amet. Quisque eleifend neque ac interdum venenatis.
                        </p>
                        <p>
                        Vivamus finibus libero ut arcu cursus, at convallis metus finibus. Integer non lorem nibh. Sed sollicitudin eget ipsum quis scelerisque. Duis a aliquam elit. Cras auctor lorem laoreet justo posuere, vel facilisis mi blandit. Aenean gravida tempor est ac cursus. Integer non metus mauris. Cras id nibh tincidunt, viverra diam et, porta erat. Cras erat dui, posuere eget arcu id, ullamcorper rutrum diam. Aenean non ultrices lectus, quis dignissim mauris. Nulla viverra sed enim vitae consequat. Curabitur nec gravida augue.
                        </p>
                        <p>
                        Pellentesque ac lorem vehicula, dictum velit vitae, dictum nulla. Nullam volutpat ut magna quis porta. Vestibulum imperdiet elit sed gravida accumsan. Ut orci arcu, iaculis a ultrices eget, feugiat ut diam. Morbi aliquam justo id finibus dictum. Cras at vulputate diam. Nam non accumsan diam. Nam aliquam est a nulla ultrices sodales. Aenean rhoncus nisl id molestie sollicitudin. Sed vel odio a nunc accumsan cursus et ut lorem. Nulla mattis congue mauris et posuere. Cras vehicula, tortor vitae venenatis rhoncus, libero urna porta felis, et egestas nibh ex et eros. Vivamus purus leo, consequat eget varius ac, semper non nibh. Nulla egestas accumsan nulla, nec vehicula risus. Integer sed libero erat.
                        </p>
                    </div>
                    <div className="auther red">Written by Byron Wade (Dont mind the spelling or grammer im a programmer first writer second!)</div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  </Layout>
)

export default Blog
