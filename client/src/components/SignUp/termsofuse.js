import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Divider from "@material-ui/core/Divider";

const modal = props => {
  return (
    <Modal>
      <h5>Terms of Use</h5>
      <Divider />
      <p>
        BY USING riseUP’S APPLICATION (INCLUDING ITS CONTENT) AND/OR PRODUCTS
        AND/OR SERVICES, YOU AGREE TO THE TERMS AND CONDITIONS THAT FOLLOW. IF
        YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, OR YOU DO NOT WISH TO BE
        BOUNDED BY THEM, DO NOT USE riseUp’S WEBSITE, PRODUCTS OR SERVICES.
      </p>
      <p>
        You will not post on nor distribute through the riseUP Site any
        materials that are of defamatory, threatening, obscene, harmful,
        pornographic or otherwise illegal nature. Also, materials that somehow
        violate or infringe, in any way, on Our rights or on the rights of
        others (including but not limited to intellectual property rights,
        confidentiality rights and privacy rights) are absolutely forbidden, as
        well as activities that may cause distress or inconvenience on Us or
        others. Moreover, You may not express opinions that are vulgar, crude,
        sexist, racist or otherwise offensive. We encourage Users to treat each
        other in a respectful and polite manner.
      </p>
      <Button>I AGREE</Button>
      <Button>I DISAGREE</Button>
    </Modal>
  );
};
