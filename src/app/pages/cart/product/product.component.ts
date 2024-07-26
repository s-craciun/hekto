import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public mockProduct = {
    id: 'W526431',
    name: 'Perfume',
    imgPath:
      'https://s3-alpha-sig.figma.com/img/d538/8654/c557c954e945d3083f43778ab31ab2fa?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pebfe1WCqEcEAwrh2XCvK3HV6PoX4ojiBQMU61yvQjTvlNU~HxGQQ1LipebzV5LOXxhN9HQ3wv~JoU-PkCLeg7jgBeGCdAcMzRAP5SzgYpOULFu0Gx~lq72x7JyOKCmfqKxIT~u235hIq3e30XQLefLsdJIExQYRoz0BPJE2Dn8FAFg4HyIa3udTkgNVXaZtUnHgXcV6sax2eENhVpG7CCLxOaxza2B4v1oS58NWt3xayX0ku4EcEeeaQnqkCo4yEYfAFssK1owZo7DLDo~jDe~UBwi~HWFvSm~pcOxJ~Dx8soMRG7pI2lNLs-Iny8m9O2e~t2MJ0xjV3iaaZCpJjA__',
    demoImgs: [
      'https://s3-alpha-sig.figma.com/img/2edd/5678/43efe91a35d8a37d1e8b892a89aa89c4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFva-SK5qj7ZyHxHBmfPfzd7i1I50FqnE4OecPJu~um24SKCbc38tKDXrYdxQSttvqDQRY2FcSCnAt25QvFbrOiWgD6gdcttRhSVDIVGCZKmCeFjMxuJwg1mZGZnB6dQ7mmSNsX3gnd~2~AsUoZeIA9Ymg16vMaKAkIi70X3qfgkl7ZDqNarAkFgOWONPdk0P-bydMTuZU1vdDSO3FqAnOjF20PbwBw3H8Yb23WqU~4UnFB3Jva-tOF7-5PRP7l7Q7tQqnGNWRDr7Vh6vgUxqMzE6htjivP6q0quAbPICwypiJiqDbwB8RDIsngDCgqwLVNwvGDrh~2cWlEZmyez6g__',
      'https://s3-alpha-sig.figma.com/img/f46b/dffe/ba95350d6d3e7241566efd0889b8edc2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p83MSoC202Bkd2IZY4SAREQ1LeIjgKuWQtjdNLnzLixdivGqZi6cfP9LVo9opUeIboHNjFPAcjH8kSQY4dFr-V1YmdYBaj5lHFOFrIY1Gxm52y2rlirAmyKyIl6LtWJNoqPE8KwTJS-W9JzGaPFzh8prR0RU81JFRxHD2x9kcYI-gCvKJDg89k99pnI4U3h77ZgNx1Mziiu9wicvt5HCcNkntx12drF9C5WpD4n5QnY9GhsXLItc82JX9864q2zKkUiCTBHlvPDsRL6md-2UoxLac9qpdqWj5zOJrEFx4RHdBeiDFc0f8ycK~SHqwPKXpxN0RrsRs~myWajAbfCINQ__',
    ],
    price: 29,
    offer: 19,
    discount: 5,
    types: ['new'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    rating: 3,
    brand: 'vke',
    category: 'perfume',
  };
  public productCount = 1;
  public totalProductPrice = this.mockProduct.offer;

  constructor() {}

  public onAddProductCount() {
    this.productCount += 1;
    this.totalProductPrice = this.mockProduct.offer * this.productCount;
  }

  public onRemoveProductCount() {
    if (this.productCount !== 1) {
      this.productCount -= 1;
      this.totalProductPrice = this.mockProduct.offer * this.productCount;
    }
  }
}
