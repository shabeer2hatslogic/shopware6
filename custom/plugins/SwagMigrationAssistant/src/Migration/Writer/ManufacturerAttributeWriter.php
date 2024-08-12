<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Migration\Writer;

use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\DataSelection\DefaultEntities;

#[Package('services-settings')]
class ManufacturerAttributeWriter extends AbstractWriter
{
    public function supports(): string
    {
        return DefaultEntities::PRODUCT_MANUFACTURER_CUSTOM_FIELD;
    }
}
