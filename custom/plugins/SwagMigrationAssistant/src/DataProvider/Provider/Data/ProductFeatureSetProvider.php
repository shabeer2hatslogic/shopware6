<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\DataProvider\Provider\Data;

use Shopware\Core\Content\Product\Aggregate\ProductFeatureSet\ProductFeatureSetCollection;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Sorting\FieldSorting;
use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\DataSelection\DefaultEntities;

#[Package('services-settings')]
class ProductFeatureSetProvider extends AbstractProvider
{
    /**
     * @param EntityRepository<ProductFeatureSetCollection> $productFeatureSetRepo
     */
    public function __construct(private readonly EntityRepository $productFeatureSetRepo)
    {
    }

    public function getIdentifier(): string
    {
        return DefaultEntities::PRODUCT_FEATURE_SET;
    }

    public function getProvidedData(int $limit, int $offset, Context $context): array
    {
        $criteria = new Criteria();
        $criteria->addAssociation('translations');
        $criteria->setLimit($limit);
        $criteria->setOffset($offset);
        $criteria->addSorting(new FieldSorting('id'));
        $result = $this->productFeatureSetRepo->search($criteria, $context);

        return $this->cleanupSearchResult($result, ['productFeatureSetId']);
    }

    public function getProvidedTotal(Context $context): int
    {
        return $this->readTotalFromRepo($this->productFeatureSetRepo, $context);
    }
}
